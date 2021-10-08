.PHONY: default
default: update

update:
	npm install jaakrecog-fingerprint@1.0.0-dev.19
	npx cap sync android
	ionic capacitor build android
