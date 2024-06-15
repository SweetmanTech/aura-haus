import getLink from '../getLink';

const formatRawLogs = (rawLogs: any[]) =>
  rawLogs.map((log: any) => ({
    url: getLink(log.args.newURI),
    contract: log.address,
    owner: log.args.sender,
  }));

export default formatRawLogs;
