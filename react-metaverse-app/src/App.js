import React from 'react';
import { WorldViewer } from 'react-metaverse';

const App = () => {
  return (
    <WorldViewer world={'sample.fbx'} scale={0.05} hdri={'small_harbor_01_1k.hdr'} />
  );
}

export default App
