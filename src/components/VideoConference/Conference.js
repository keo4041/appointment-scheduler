import React, { useEffect, useRef } from 'react';
import { grpc } from 'grpc-web';
import { ConferenceClient } from './generated/proto/conference_pb_service';
import { JoinConferenceRequest, MediaStream } from './generated/proto/conference_pb';

const Conference = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const client = grpc.client(ConferenceClient.JoinConference, {
      host: 'http://localhost:8080',
    });

    client.onHeaders((headers) => {
      console.log('Received headers', headers);
    });

    client.onMessage((message) => {
      console.log('Received message', message);
      // Handle incoming video frames
      // ...
    });

    client.onEnd((status, statusMessage) => {
      console.log('Received end', status, statusMessage);
    });

    const joinConferenceRequest = new JoinConferenceRequest();
    joinConferenceRequest.setConferenceId('your-conference-id');

    client.start();
    client.send(joinConferenceRequest);
    client.finish();

    return () => {
      client.close();
    };
  }, []);

  return <video ref={videoRef} autoPlay />;
};

export default Conference;
