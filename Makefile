S3_BUCKET=johanh-svelte-test
BUILD_DIR=build

deploy:
	aws s3 rm s3://$(S3_BUCKET) --recursive
	aws s3 cp $(BUILD_DIR) s3://$(S3_BUCKET) --recursive