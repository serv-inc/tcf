zip: lint
	cd addon; zip ../tcf.zip *

lint:
	cp -u node_modules/blueimp-md5/js/md5.min.js addon/
	ls addon/*.js | grep -v md5.min.js | xargs jshint
	python -m json.tool addon/manifest.json > /dev/null
	tidy -eq addon/blockpage.html

bannedupdate:
	wget -N https://ahmia.fi/banned
	sed -i '/^[[:space:]]*$$/d' banned  # double $$ for make
	sed -i 's/[[:space:]]*//g' banned
	sed -i 's/^/"/g' banned
	sed -i 's/$$/",/g' banned
	mv banned meta/
