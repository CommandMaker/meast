dc := docker-compose
de := docker-compose exec

.PHONY: dev
dev:
	@$(dc) build
	@$(dc) up