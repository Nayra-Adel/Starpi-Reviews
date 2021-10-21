module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 2000),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'b83a0a3d1093fef2e07985ee03f326e6'),
    },
  },
});
