import { NextResponse } from 'next/server';
import { processImage } from '@/lib/openai';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const image = formData.get('image') as File;

    if (!image) {
      return NextResponse.json(
        { error: 'No image provided' },
        { status: 400 }
      );
    }

    // Validate file type
    if (!['image/jpeg', 'image/png'].includes(image.type)) {
      return NextResponse.json(
        { error: 'Invalid file type. Please upload a PNG or JPEG image.' },
        { status: 400 }
      );
    }

    // Validate file size (max 4MB)
    if (image.size > 4 * 1024 * 1024) {
      return NextResponse.json(
        { error: 'Image size too large. Maximum size is 4MB.' },
        { status: 400 }
      );
    }

    try {
      // Convert image to base64
      const bytes = await image.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const base64Image = buffer.toString('base64');

      // Process image with OpenAI
      const result = await processImage(base64Image);

      return NextResponse.json({
        success: true,
        grid: result.grid,
      });
    } catch (error) {
      console.error('OpenAI processing error:', error);
      return NextResponse.json(
        { error: 'Failed to process image with AI. Please try again.' },
        { status: 500 }
      );
    }

  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json(
      { error: 'Failed to process upload request' },
      { status: 500 }
    );
  }
} 