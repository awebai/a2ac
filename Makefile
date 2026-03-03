PORT := 5710

.PHONY: install dev build preview clean

install:
	pnpm install

dev:
	pnpm dev --port $(PORT)

build:
	pnpm build

preview:
	pnpm preview --port $(PORT)

clean:
	rm -rf node_modules .vitepress/cache .vitepress/dist
