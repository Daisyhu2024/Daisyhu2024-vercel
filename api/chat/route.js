export async function POST(request) {
    const { message, systemPrompt } = await request.json();

    const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.DEEPSEEK_API_KEY}`
        },
        body: JSON.stringify({
            model: "deepseek-chat",
            messages: [
                {
                    "role": "system",
                    "content": systemPrompt
                },
                {
                    "role": "user",
                    "content": message
                }
            ],
            temperature: 0.7
        })
    });

    const data = await response.json();
    return new Response(JSON.stringify(data));
}
