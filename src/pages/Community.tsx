import { useState } from "react";
import type { FormEvent } from "react";

type Post = { id: number; author: string; text: string };

export default function Community() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [text, setText] = useState("");

  function addPost(e: FormEvent) {
    e.preventDefault();
    if (!text.trim()) return;
    setPosts((p) => [
      ...p,
      { id: Date.now(), author: "anon", text: text.trim() },
    ]);
    setText("");
  }

  return (
    <div className="app-container">
      <div className="card">
        <h3>COMMUNITY BOARD</h3>
        <form onSubmit={addPost} style={{ marginBottom: "1rem" }}>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Share something..."
            style={{ padding: "0.5rem", width: "70%" }}
          />
          <button type="submit" style={{ marginLeft: "0.5rem" }}>
            Post
          </button>
        </form>

        <ul style={{ listStyle: "none", padding: 0 }}>
          {posts.map((p) => (
            <li key={p.id} style={{ margin: "0.75rem 0", color: "#000" }}>
              <strong>{p.author}</strong>: {p.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
