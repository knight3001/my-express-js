export default {
  port: 1337,
  host: "localhost",
  dbUri: "mongodb://localhost:27017/rest-api",
  saltWorkFactor: 10,
  accessTokenTtl: "15m",
  refreshTokenTtl: "1y",
  privateKey: `-----BEGIN RSA PRIVATE KEY-----
  MIIBOQIBAAJBAJuHVb9Im+zEpfexmSUr0KgCNCDjAcBF9PLhr6fKqz2Ibsdv4vVB
  GTQPasSyelhiQAH8sDhi3bFddDI7zRhWTocCAwEAAQJAVK5MNrkvBKxRfVq6eq2v
  jzqb7WgMVQcCBphxDpffwsE9lQ5s3L164RxbFkYHtf274FNhoWEw7OzTSBEm4keD
  mQIhAP2l/aJvCoG1i0PPdYqfEvChDchJh2Xmd6Jp8YC8eBILAiEAnPh3e5FEMJT/
  rXbP29RVB2fiHVNmJQlPAeEq472HXvUCIBVqFzDIiS2MQza1ZCoQ5gt0vXIkaw76
  Vy1aHm6M+uIjAiA4L2+FGVARG6QQ0PBBvVTaG8MBwDJVm2leQNx7PAHSaQIgNyWk
  JmBG9uqo1EZQDn/qhceBCKhb0MThTF7FHcuOhgA=
  -----END RSA PRIVATE KEY-----`,
};
