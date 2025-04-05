FROM rust:1-bookworm AS builder

# 必要なパッケージをインストール
RUN apt-get update && apt-get install -y \
    pkg-config \
    libssl-dev \
    libpq-dev \
    && rm -rf /var/lib/apt/lists/*

# 作業ディレクトリを設定
WORKDIR /workspaces/boardcraft

# キャッシュ用のディレクトリを作成
RUN mkdir -p /usr/local/cargo/registry

# ボリュームのマウントポイントを作成
VOLUME ["/workspaces/boardcraft/target", "/usr/local/cargo/registry"]

# デフォルトのコマンドを設定
CMD ["cargo", "test", "--all", "--verbose"] 