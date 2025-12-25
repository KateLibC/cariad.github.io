#!/usr/bin python3

from datetime import datetime
import sys
import os

pathdir = '_posts/'

def datestamp():
    d = str(datetime.now().day).zfill(2)
    m = str(datetime.now().month).zfill(2)
    y = str(datetime.now().year)
    return f'{y}-{m}-{d}'

def header(t):
    o = f'''---\nlayout:	post\ntitle:	"{title}"\ndate:	{datestamp()}\n---'''
    return o

def filename(p, s):
    s = '-'.join(s.split(' '))
    fname = f'{datestamp()}-{s}.md'
    return os.path.join(p, fname)

def create(s, t):
    with open(filename(p=pathdir, s=s), 'w') as f:
        f.write(header(t=t))

if __name__ == '__main__':
    stub = sys.argv[1]
    title = sys.argv[2]
    fname = filename(p=pathdir, s=stub)
    create(s=stub, t=title)
    print(f'Created: {fname}')