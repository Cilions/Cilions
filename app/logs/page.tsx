import Nav from "@/components/Nav";

interface Commit {
  sha: string;
  commit: {
    message: string;
    author: {
      name: string;
      date: string;
    };
  };
}

async function getCommits() {
  const [commitsData] = await Promise.all([
    fetch('https://api.github.com/repos/cilions/me/commits').then(res => res.json()),
  ]);

  return { commits: commitsData as Commit[]};
}

export default async function Logs() {
  const commits = await getCommits();

  return (
    <>
      <Nav />
      <main>
        <section>
          <h3>Commit logs:</h3>
          <div>
            {commits.commits.map((commit: Commit) => (
              <div key={commit.sha} style={{ margin: "0 0 1rem 0" }}>
                <p>
                  <strong>{commit.commit.message}</strong>
                </p>
                <p>{new Date(commit.commit.author.date).toLocaleString()}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
