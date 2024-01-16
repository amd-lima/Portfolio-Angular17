import { Component, signal } from '@angular/core';
import { IKnowledge } from '../../interface/IKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss',
})
export class KnowledgeComponent {
  public knowledge = signal<IKnowledge[]>([
    { src: 'assets/icons/knowledge/angular.svg', alt: 'Angular icon' },
    { src: 'assets/icons/knowledge/css3.svg', alt: 'Css3 icon' },
    { src: 'assets/icons/knowledge/html5.svg', alt: 'html5 icon' },
    { src: 'assets/icons/knowledge/javascript.svg', alt: 'JS icon' },
    { src: 'assets/icons/knowledge/nodejs.svg', alt: 'Node icon' },
    { src: 'assets/icons/knowledge/sass.svg', alt: 'Sass icon' },
    { src: 'assets/icons/knowledge/git.svg', alt: 'Git icon' },
    { src: 'assets/icons/knowledge/react.svg', alt: 'React icon' },
  ]);
}
