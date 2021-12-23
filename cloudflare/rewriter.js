const apiEndpoint = "jsonplaceholder.typicode.com";
const pageUrl = "react-requests-hook-example.pages.dev";


async function handleRequest(request) {
  const { method, body, url } = request;

  const newRequestInit = {
    method, 
    body, 
  };

  const newUrl = new URL(url);
  const path = newUrl.pathname;

  if (path.startsWith("/api")) {
    newUrl.hostname = apiEndpoint;
    newUrl.pathname = path.slice(4);
  } else {
    newUrl.hostname = pageUrl;
  }

  const newRequest = new Request(newUrl, new Request(request, newRequestInit));

  try {
    return await fetch(newRequest);
  } catch (e) {
    const errorStr = JSON.stringify({ error: e.message });
    return new Response(errorStr, { status: 500 })
  }
}

addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request))
});
