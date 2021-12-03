import { RepositoryItem } from './RepositoryItem';

import {
    useEffect,
    useState
} from 'react';

import '../styles/repositories.scss';

interface Repository {
    name:        string
    description: string
    html_url:    string
}

export function RepositoryList() {
    const [repositories, setRepositories] = useState<Repository[]>([]);

    useEffect(() => {
        fetch('https://api.github.com/users/NyctibiusVII/repos')
            .then(response => response.json())
            .then(data => setRepositories(data))
    }, []);

    return (
        <section className="repositoryList">
            <h2>Repositorios</h2>

            <ul>
                { repositories.map((repository, index) => <RepositoryItem key={index} repository={repository} />) }
            </ul>
        </section>
    );
}