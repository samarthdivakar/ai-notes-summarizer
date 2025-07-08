import { Injectable } from '@nestjs/common';

@Injectable()
export class SummarizeService {
  // This function now returns a mock summary for development/testing
  async summarizeText(text: string): Promise<string> {
    // Split the text into words and take the first 20
    const words = text.split(/\s+/).slice(0, 20);
    const preview = words.join(' ');
    return `This is a mock summary of the first 20 words: ‘${preview}...’`;
  }
}
