PROJECT="emailtool"
IMAGE="bigdata"
docker build -t docker.bigdatatech.vn/$PROJECT/$IMAGE:latest .
docker push docker.bigdatatech.vn/$PROJECT/$IMAGE:latest