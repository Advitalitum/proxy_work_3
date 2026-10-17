const domainsList = [
  'spotify.com', 'spotifycdn.com', 'scdn.co',
  'twitter.com', 'twimg.com', 't.co', 'x.com',
  'medium.com',
  'sponsor.ajay.app',
  'jetbrains.com', 'intellij.net', 'jetbrains.ai', 'myjetbrains.com', 'jetbrains.com.cn', 'jetbrains.dev', 'jetbrains.net', 'jetbrains.org', 'jetbrains.space', 'jetbrains.ru', 'jb.gg',
  '0x0a.de', 'weg.fan', 'celestemods.com', 'maddie480.ovh',
  'cloudfront.net'
];

const ytDomainsList = [
  'youtube.com','googlevideo.com', 'ytimg.com', 'youtu.be', 'ggpht.com', 'youtubei.googleapis.com', 'sponsor.ajay.app'
];

const domains = new Set(domainsList);

const domainsWithDotPrefix = domainsList.map(domain => '.' + domain);

const ytDomains = new Set(ytDomainsList);

const ytDomainsWithDotPrefix = ytDomainsList.map(domain => '.' + domain);


function FindProxyForURL(_, host) {

  const useProxy = domains.has(host) || domainsWithDotPrefix.some(domainWithDotPrefix => host.endsWith(domainWithDotPrefix));

  if (useProxy) {
      return 'PROXY 192.168.0.252:18080; DIRECT';
  }

  const useYtProxy = ytDomains.has(host) || ytDomainsWithDotPrefix.some(domainWithDotPrefix => host.endsWith(domainWithDotPrefix));

  if (useYtProxy) {
      return 'PROXY 192.168.0.252:8118; DIRECT';
  }
  
  return 'DIRECT';
}
