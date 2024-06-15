import { NextResponse } from 'next/server';
import getAttestationLogs from '@/lib/eas/getAttestationLogs';
import getAttestations from '@/lib/eas/getAttestations';
import { CURATOR } from '@/lib/consts';
import getDecodedAttestationData from '@/lib/eas/getDecodedAttestationData';
import getCreatorList from '@/lib/getCreatorList';

export async function GET() {
  try {
    const response = await getCreatorList();
    return NextResponse.json({ creators: response }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
