import { CURATOR } from './consts';
import getAttestationLogs from './eas/getAttestationLogs';
import getAttestations from './eas/getAttestations';
import getDecodedAttestationData from './eas/getDecodedAttestationData';

const getCreatorList = async () => {
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
    const returnValue = mapped[0][0].value.value;
    console.log('SWEETS MAPPED', returnValue);
    return returnValue;
  } catch (error) {
    console.error('Failed to fetch creator list:', error);
    return null;
  }
};

export default getCreatorList;
