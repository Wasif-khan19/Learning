// SignaturePad.js
import { saveAs } from 'file-saver';
import { useRef, useState } from 'react';
import SignatureCanvas from 'react-signature-canvas';

const SignaturePad = () => {
  const sigCanvas = useRef({});
  const [color, setColor] = useState('#000000'); // Default color black

  const clear = () => sigCanvas.current.clear();
  const save = () => {
    const canvas = sigCanvas.current.getCanvas();
    canvas.toBlob((blob) => {
      saveAs(blob, 'signature.png');
    });
  };

  return (
    <div className="flex flex-col items-center p-4">
      <SignatureCanvas
        ref={sigCanvas}
        penColor={color}
        canvasProps={{ className: 'border border-gray-300 w-full h-64' }}
      />
      <div className="mt-4 flex flex-col items-center space-y-2">
        <div className="flex space-x-2">
          <button onClick={clear} className="bg-red-500 text-white px-4 py-2 rounded">Clear</button>
          <button onClick={save} className="bg-green-500 text-white px-4 py-2 rounded">Save</button>
        </div>
        <div className="flex flex-col items-center">
          <label htmlFor="colorPicker" className="mb-2 text-white">Pick a color:</label>
          <input 
            type="color" 
            id="colorPicker" 
            placeholder='Colour'
            value={color} 
            onChange={(e) => setColor(e.target.value)}
            className="w-16 h-8" 
          />
        </div>
      </div>
    </div>
  );
};

export default SignaturePad;
