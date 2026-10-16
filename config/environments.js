// Cấu hình URL theo môi trường. Thêm môi trường mới (vd: uat) bằng cách thêm 1 key.
export const ENVIRONMENTS = {
  stag: {
    name: 'stag',
    ssoLoginUrl: 'https://ftms-stag.fpt.net/id/login',
    bmsWebUrl: 'https://ftms-stag.fpt.net/bmsv2/',
    bmsApiUrl: 'https://ftisapi-stag.fpt.net/bms-service',
    bmsTokenCookie: 'BMS_access_token',
  },
};
