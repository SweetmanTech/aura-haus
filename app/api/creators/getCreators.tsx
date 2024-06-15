import { CURATOR } from '@/lib/consts';
import getAttestationLogs from '@/lib/eas/getAttestationLogs';
import getAttestations from '@/lib/eas/getAttestations';
import getDecodedAttestationData from '@/lib/eas/getDecodedAttestationData';

const getCreators = async () => {
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
  return mapped;
};

export default getCreators;
