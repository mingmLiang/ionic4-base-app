// ionic build --prod
const environment = {
  production: true
};

const serverUrl = {
  restPortal: 'http://120.24.80.15:8081/rest/portal/',
  property: 'http://120.24.80.15:8081/rest/property/',
  profile: 'http://120.24.80.15:8081/rest/profile/',
  parking: 'http://120.24.80.15:8081/rest/parking/',
  serverSocket: 'http://120.24.80.15:8081/',
  portal: 'http://120.24.80.15:8081/portal/',
  pano: 'http://120.24.80.15:8081/'
};

export { environment, serverUrl };
