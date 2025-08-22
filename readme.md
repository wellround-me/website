# convert all images in folder from .jpeg to webp
for i in *.jpeg; do ffmpeg -i "$i" "${i%.*}.webp"; done
for i in *.PNG; do ffmpeg -i "$i" "${i%.*}.webp"; done

