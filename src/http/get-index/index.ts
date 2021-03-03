export async function handler() {
    return {
        statusCode: 302,
        headers: {
            'location': '/_static/index.html',
            'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
        }
    }
}