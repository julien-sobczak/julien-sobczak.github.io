import os
import glob

for filename in glob.glob('_posts/*.html'):
    print "Processing %s" % filename
    with open(filename, 'r') as f:
        content = f.read()
        print content
    break

