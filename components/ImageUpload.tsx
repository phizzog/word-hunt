'use client';

import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { findWords, scoreWord, WordResult } from '@/lib/wordFinder';
import WordPathGrid from './WordPathGrid';
import MultiGridDisplay from './MultiGridDisplay';
import { Card, CardBody, Button, Chip } from "@nextui-org/react";

interface Position {
  row: number;
  col: number;
}

interface UploadState {
  file: File | null;
  preview: string | null;
  error: string | null;
  isLoading: boolean;
  grid: string[][] | null;
  correct_letters: string[] | null;
  words: Array<{ 
    word: string; 
    score: number; 
    length: number;
    path: Position[];
  }> | null;
}

export default function ImageUpload() {
  const [uploadState, setUploadState] = useState<UploadState>({
    file: null,
    preview: null,
    error: null,
    isLoading: false,
    grid: null,
    correct_letters: null,
    words: null,
  });

  const [selectedWord, setSelectedWord] = useState<string | null>(null);

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    
    if (!file) return;
    
    // Validate file type
    if (!['image/jpeg', 'image/png'].includes(file.type)) {
      setUploadState(prev => ({
        ...prev,
        error: 'Please upload a PNG or JPEG image.',
      }));
      return;
    }

    // Validate file size
    if (file.size > 4 * 1024 * 1024) {
      setUploadState(prev => ({
        ...prev,
        error: 'Image size too large. Maximum size is 4MB.',
      }));
      return;
    }

    // Create preview
    const preview = URL.createObjectURL(file);
    
    setUploadState(prev => ({
      ...prev,
      file,
      preview,
      error: null,
      grid: null,
      words: null,
    }));
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/jpeg': ['.jpeg', '.jpg'],
      'image/png': ['.png'],
    },
    maxFiles: 1,
    maxSize: 4 * 1024 * 1024,
  });

  const handleSubmit = async () => {
    if (!uploadState.file) return;

    try {
      setUploadState(prev => ({ ...prev, isLoading: true, error: null }));
      
      const formData = new FormData();
      formData.append('image', uploadState.file);

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to process image');
      }
      
      if (!data.success || !data.grid) {
        throw new Error('Invalid response from server');
      }

      // Find words in the grid
      const foundWords = await findWords(data.grid);
      const scoredWords = foundWords.map(({ word, path }) => ({
        word,
        score: scoreWord(word),
        length: word.length,
        path
      }));

      setUploadState(prev => ({
        ...prev,
        grid: data.grid,
        correct_letters: data.correct_letters,
        words: scoredWords,
        error: null,
      }));
      
    } catch (error) {
      console.error('Upload error:', error);
      setUploadState(prev => ({
        ...prev,
        error: error instanceof Error ? error.message : 'Failed to process image. Please try again.',
      }));
    } finally {
      setUploadState(prev => ({ ...prev, isLoading: false }));
    }
  };

  // Group words by length
  const wordsByLength = uploadState.words?.reduce((acc, word) => {
    acc[word.length] = acc[word.length] || [];
    acc[word.length].push(word);
    return acc;
  }, {} as Record<number, typeof uploadState.words extends null ? never : (typeof uploadState.words)[0][]>);

  // Mock path for now - you'll need to implement actual path finding
  const getWordPath = (word: string) => {
    // This is a placeholder - implement actual path finding logic
    return Array.from({ length: word.length }).map((_, i) => ({
      row: Math.floor(i / 4),
      col: i % 4
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-[1600px] mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-green-600 to-emerald-600 text-transparent bg-clip-text">
          Word Hunt Solver
        </h1>

        {/* Upload Section */}
        <div className="max-w-2xl mx-auto mb-12">
          <Card shadow="sm" className="border-none">
            <CardBody className="p-6 gap-6">
              <div
                {...getRootProps()}
                className={`border-2 border-dashed rounded-3xl p-8 text-center cursor-pointer transition-all
                  ${isDragActive 
                    ? 'border-green-500 bg-green-50' 
                    : 'border-gray-300 hover:border-green-400 hover:bg-gray-50'
                  }`}
              >
                <input {...getInputProps()} />
                {uploadState.preview ? (
                  <div className="space-y-4">
                    <img
                      src={uploadState.preview}
                      alt="Preview"
                      className="max-h-80 mx-auto rounded-xl shadow-sm"
                    />
                    <p className="text-sm text-gray-600">Click or drag to replace</p>
                  </div>
                ) : (
                  <div className="space-y-3 py-8">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-xl font-semibold text-gray-700">
                      Drag and drop your Word Hunt screenshot
                    </p>
                    <p className="text-sm text-gray-500">or click to select a file</p>
                    <div className="flex items-center justify-center gap-3 mt-4">
                      <Chip size="sm" variant="flat" color="success">PNG</Chip>
                      <Chip size="sm" variant="flat" color="success">JPEG</Chip>
                      <Chip size="sm" variant="flat" color="warning">Max 4MB</Chip>
                    </div>
                  </div>
                )}
              </div>

              {uploadState.error && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-xl">
                  <p className="text-sm text-red-600 font-medium">{uploadState.error}</p>
                </div>
              )}
            </CardBody>
          </Card>

          {/* Move button outside the card */}
          {uploadState.file && !uploadState.grid && (
            <Button
              onClick={handleSubmit}
              disabled={uploadState.isLoading}
              className="w-full mt-4 h-14"
              radius="lg"
              color="success"
              variant="shadow"
              size="lg"
              startContent={
                uploadState.isLoading ? (
                  <div className="relative w-5 h-5">
                    <div className="absolute inset-0">
                      <div className="w-full h-full rounded-full border-3 border-white/30 border-t-white animate-spin" />
                    </div>
                  </div>
                ) : (
                  <svg 
                    className="w-5 h-5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                )
              }
            >
              <span className="px-2 text-lg">
                {uploadState.isLoading ? 'Processing...' : 'Find All Words'}
              </span>
            </Button>
          )}
        </div>

        {/* Results Section */}
        {uploadState.grid && (
          <div className="space-y-8">
            <Card shadow="sm" className="border-none">
              <CardBody className="p-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">Found Words</h2>
                    <p className="text-gray-500">
                      All possible words from your Word Hunt grid
                    </p>
                  </div>
                  {uploadState.words && (
                    <Chip
                      size="lg"
                      className="bg-gradient-to-r from-green-500 to-emerald-600"
                      classNames={{
                        base: "text-white font-bold px-4 py-6 h-auto",
                        content: "text-2xl"
                      }}
                    >
                      {uploadState.words.reduce((sum, { score }) => sum + score, 0).toLocaleString()} Points
                    </Chip>
                  )}
                </div>
                
                {/* Word Length Summary */}
                {uploadState.words && (
                  <div className="flex flex-wrap gap-2 mb-8">
                    {Object.entries(wordsByLength || {})
                      .sort(([a], [b]) => Number(b) - Number(a))
                      .map(([length, words]) => (
                        <Chip
                          key={length}
                          size="lg"
                          variant="flat"
                          classNames={{
                            base: "bg-gray-100/80 backdrop-blur-sm",
                            content: "font-medium text-base"
                          }}
                        >
                          {length} Letters: {words.length} × {words[0].score} pts
                        </Chip>
                      ))}
                  </div>
                )}

                {/* Multi-Grid Display */}
                {uploadState.words && (
                  <MultiGridDisplay
                    grid={uploadState.grid}
                    words={uploadState.words}
                  />
                )}
              </CardBody>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
} 