zip: lint
	cd addon; zip ../tcf.zip *

lint:
	ls addon/*.js | grep -v md5.min.js | xargs jshint
	python -m json.tool addon/manifest.json > /dev/null
	tidy -eq addon/blockpage.html
