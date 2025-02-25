module.exports = ({ env }) => ({
    'content-type-builder': {
      enabled: true,
      config: {
        plugin: {
          // 開発モード以外でもContent-Type Builderを有効化
          development: true,
          production: true,
        },
      },
    },
  });