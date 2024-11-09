import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VeloService } from 'src/app/services/velo-service.service';

@Component({
  selector: 'app-ajoutervelo',
  templateUrl: './ajoutervelo.component.html',
  styleUrls: ['./ajoutervelo.component.css']
})
export class AjouterveloComponent {
  veloForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private veloService: VeloService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.veloForm = this.fb.group({
      type: ['', Validators.required],
      marque: ['', Validators.required],
      status: [true, Validators.required]
    });
  }

  onSubmit(): void {
    if (this.veloForm.valid) {
      this.veloService.ajouterVelo(this.veloForm.value).subscribe({
        next: () => {
          alert('Vélo added successfully!');
          this.router.navigate(['/affichervelo']);
        },
        error: (error) => {
          console.error('Error adding vélo:', error);
          alert('Failed to add vélo.');
        }
      });
    }
  }
  goBack(): void {
    this.router.navigate(['/affichervelo']); // Navigate back to the afficher-velos component
  }
}
