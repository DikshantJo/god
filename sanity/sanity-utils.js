import { createClient, groq } from 'next-sanity';

export async function getProjects() {
    const client = createClient({
        projectId: 'nahm0f1b',
        dataset: 'production',
        apiVersion: '2023-10-01',
    });

    return client.fetch(
        groq`*[_type == "Product"] {
            _id,
            _createdAt,
            name,
            "image": image.asset->url, // Corrected the typo here
            url,
            content
        }`
    );
}


export async function getProjectsInterior() {
    const client = createClient({
        projectId: 'nahm0f1b',
        dataset: 'production',
        apiVersion: '2023-10-01',
    });

    return client.fetch(
        groq`*[_type == "Interior"] {
            _id,
            _createdAt,
            name,
            "image": image.asset->url, // Corrected the typo here
            url,
            content
        }`
    );
}


export async function getProjectFAQ() {
    const client = createClient({
        projectId: 'nahm0f1b',
        dataset: 'production',
        apiVersion: '2023-10-01',
    });

    return client.fetch(
        groq`*[_type == "faq"] {
          answer,
          question
        }`
    );
}
