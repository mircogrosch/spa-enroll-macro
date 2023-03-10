export default {
    webpack(config, { isServer }) {
        const prefix = config.assetPrefix ?? config.basePath ?? '';
        config.module.rules.push({
          test: /\.mp4$/,
          use: [{
            loader: 'file-loader',
            options: {
              publicPath: `${prefix}/_next/assets/`,
              outputPath: `${isServer ? '../' : ''}assets`,
              name: '[name].[hash].[ext]',
            },
          }],
        });
    
        return config;
      },
    };