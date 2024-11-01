export interface CodeChunk {
  code: string;
  highlightLines?: string[];
  highlightTokens?: string[];
}

export interface CodeAnimationConfig {
  chunks: CodeChunk[];
  language: string;
  theme?: string;
} 