export const getQrImage = async (code) => {
  const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${"http://192.168.1.69:5173/"+code}`;
  return apiUrl;
};
