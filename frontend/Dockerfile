FROM node:22-slim

# 必要なパッケージをインストール
RUN apt-get update && apt-get install -y \
    git \
    && rm -rf /var/lib/apt/lists/*

# pnpmをインストール
RUN corepack enable && corepack prepare pnpm@latest --activate

# 作業ディレクトリを設定
WORKDIR /workspaces/boardcraft/frontend

# キャッシュ用のディレクトリを作成
RUN mkdir -p /root/.pnpm-store

# ボリュームのマウントポイントを作成
VOLUME ["/workspaces/boardcraft/frontend/node_modules", "/root/.pnpm-store"]

# デフォルトのコマンドを設定
CMD ["sh", "-c", "pnpm install && pnpm test"] 