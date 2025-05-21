import type { NextApiRequest, NextApiResponse } from 'next';
import textToSpeech from '@google-cloud/text-to-speech';
import path from 'path';

const client = new textToSpeech.TextToSpeechClient({
  keyFilename: path.join(process.cwd(), 'google-tts-key.json'),
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { text } = req.body;

  const [response] = await client.synthesizeSpeech({
    input: { text },
    voice: { languageCode: 'en-US', name: 'en-US-Chirp3-HD-Achernar' },
    audioConfig: { audioEncoding: 'LINEAR16', speakingRate: 1.0 },
  });

  if (!response.audioContent) {
    return res.status(500).json({ error: 'No audio returned from Google TTS' });
  }

  res.setHeader('Content-Type', 'audio/wav');
  res.send(Buffer.from(response.audioContent as Uint8Array));
}