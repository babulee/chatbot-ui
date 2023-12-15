import mistralTokenizer from 'mistral-tokenizer-js';
import llamaTokenizer from 'llama-tokenizer-js';
import { OPENAI_API_TYPE } from '../utils/app/const';

export interface OpenAIModel {
  id: string;
  name: string;
  maxLength: number; // maximum length of a message
  tokenLimit: number;
}

export enum OpenAIModelID {
  GPT_3_5 = 'mistral-tiny',
  GPT_3_5_AZ = 'gpt-35-turbo',
  GPT_4 = 'mistral-small',
  GPT_4_32K = 'mistral-medium',
}

// in case the `DEFAULT_MODEL` environment variable is not set or set to an unsupported model
export const fallbackModelID = OpenAIModelID.GPT_4;

export const OpenAIModels: Record<OpenAIModelID, OpenAIModel> = {
  [OpenAIModelID.GPT_3_5]: {
    id: OpenAIModelID.GPT_3_5,
    name: 'Mistral-7B-v0.2',
    maxLength: 12000,
    tokenLimit: 8000,
  },
  [OpenAIModelID.GPT_3_5_AZ]: {
    id: OpenAIModelID.GPT_3_5_AZ,
    name: 'GPT-3.5',
    maxLength: 12000,
    tokenLimit: 4000,
  },
  [OpenAIModelID.GPT_4]: {
    id: OpenAIModelID.GPT_4,
    name: 'Mixtral-8X7B-v0.1',
    maxLength: 24000,
    tokenLimit: 32000,
  },
  [OpenAIModelID.GPT_4_32K]: {
    id: OpenAIModelID.GPT_4_32K,
    name: 'mistral-medium',
    maxLength: 96000,
    tokenLimit: 32000,
  },
};

export const OpenAITokenizers: Record<OpenAIModelID, any> = {
  [OpenAIModelID.GPT_3_5]: mistralTokenizer,
  [OpenAIModelID.GPT_4]: mistralTokenizer,
  [OpenAIModelID.GPT_4_32K]: mistralTokenizer,
};
