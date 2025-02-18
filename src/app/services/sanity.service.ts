import { Injectable } from '@angular/core';
import { createClient } from '@sanity/client';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SanityService {
  private client = createClient({
    projectId: environment.projectId,
    // dataset: environment.production ? 'production' : 'dev',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2023-01-01',
  });

  constructor() {}

  // Método para obtener cualquier dato
  fetchData() {
    const formattedQuery = `*[_type == ""]`;
    return this.client.fetch(formattedQuery);
  }
}
