"use client";

export default function Home() {

  const handleCreateUser = async () => {
    const payload = {
      name: "sakshat",
      email: "foo@bar.com"
    }

    try {
      const response = await fetch("/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      })

      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <main>
      <h1>Hello World</h1>

      <button onClick={handleCreateUser}>
        Create User
      </button>
    </main>
  )
}
