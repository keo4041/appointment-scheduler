protoc -I=$DIR C:\Users\keo4041\MyApps\appointment-scheduler\src\video.proto \
--js_out=import_style=commonjs:generated \
--grpc-web_out=import_style=commonjs,mode=grpcwebtext:generated