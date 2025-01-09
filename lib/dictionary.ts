class TrieNode {
  children: Map<string, TrieNode>;
  isEndOfWord: boolean;
  hasValidWords: boolean; // Track if this prefix can lead to valid words

  constructor() {
    this.children = new Map();
    this.isEndOfWord = false;
    this.hasValidWords = false;
  }
}

class Dictionary {
  private root: TrieNode;
  private static instance: Dictionary;
  private initialized: boolean = false;

  private constructor() {
    this.root = new TrieNode();
  }

  static getInstance(): Dictionary {
    if (!Dictionary.instance) {
      Dictionary.instance = new Dictionary();
    }
    return Dictionary.instance;
  }

  insert(word: string): void {
    let current = this.root;
    for (const char of word.toUpperCase()) {
      if (!current.children.has(char)) {
        current.children.set(char, new TrieNode());
      }
      current = current.children.get(char)!;
      current.hasValidWords = true; // Mark that this prefix can lead to valid words
    }
    current.isEndOfWord = true;
  }

  contains(word: string): boolean {
    let current = this.root;
    for (const char of word.toUpperCase()) {
      if (!current.children.has(char)) {
        return false;
      }
      current = current.children.get(char)!;
    }
    return current.isEndOfWord;
  }

  // Check if a prefix could lead to valid words
  hasValidPrefix(prefix: string): boolean {
    let current = this.root;
    for (const char of prefix.toUpperCase()) {
      if (!current.children.has(char)) {
        return false;
      }
      current = current.children.get(char)!;
      if (!current.hasValidWords) {
        return false;
      }
    }
    return true;
  }

  // Initialize with Scrabble dictionary
  async initialize(): Promise<void> {
    if (this.initialized) {
      return; // Don't initialize more than once
    }

    try {
      const response = await fetch('/api/dictionary');
      if (!response.ok) {
        throw new Error('Failed to fetch dictionary');
      }

      const words = await response.json();
      
      // Batch process words for better performance
      for (const word of words) {
        if (word.length >= 3 && word.length <= 8) {
          this.insert(word);
        }
      }

      this.initialized = true;
    } catch (error) {
      console.error('Failed to initialize dictionary:', error);
      throw new Error('Failed to initialize dictionary');
    }
  }
}

export const dictionary = Dictionary.getInstance(); 