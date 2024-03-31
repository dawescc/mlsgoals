check:
	@git add -A
	@git commit -m "checkpoint at $$(date '+%Y-%m-%d %H:%M:%S%z')"
	@git push > /dev/null 2>&1
	@echo Checkpoint created and pushed to remote