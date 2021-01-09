let backendHost;
let imageUrl;
const hostname=window && window.location && window.location.hostname;
if(hostname.indexOf('localhost') > -1)
{
backendHost="http://localhost/API/commonapi/api/";
//$imageUrl="http://localhost/API/commonapi/public/";
}
else
{

}
export const API_ROOT=`${backendHost}`;
//export const IMAGE_URL=`${imageUrl}`;