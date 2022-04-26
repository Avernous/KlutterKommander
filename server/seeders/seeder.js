import { seedContainers } from './containerSeeder.js';
import { seedItems } from './itemSeeder.js';

export const seeder = () => {
    seedContainers();
    seedItems();
};