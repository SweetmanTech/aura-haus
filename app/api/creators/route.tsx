import { NextResponse } from 'next/server';
import getAttestationLogs from '@/lib/eas/getAttestationLogs';
import getAttestations from '@/lib/eas/getAttestations';
import { CURATOR } from '@/lib/consts';
import getDecodedAttestationData from '@/lib/eas/getDecodedAttestationData';

export async function GET() {
  try {
    const logs = await getAttestationLogs(CURATOR);
    const attestations = await getAttestations(logs);
    const serializedAttestations = attestations.map((attestation: any) => ({
      ...attestation,
      result: attestation.result.map((value: any) =>
        typeof value === 'bigint' ? value.toString() : value,
      ),
    }));
    const mapped = serializedAttestations.map((attestation: any) =>
      getDecodedAttestationData(attestation.result),
    );
    return NextResponse.json({ creators: mapped[0][0].value.value }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
