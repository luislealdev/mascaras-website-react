export const getQrImage = async (code) => {
  const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${code}`;
  return apiUrl;
};
