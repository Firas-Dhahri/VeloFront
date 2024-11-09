import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VeloService } from 'src/app/services/velo-service.service';

@Component({
  selector: 'app-updatevelo',
  templateUrl: './updatevelo.component.html',
  styleUrls: ['./updatevelo.component.css']
})
export class UpdateveloComponent {
  veloForm!: FormGroup;
  veloId!: number;

  constructor(
    private fb: FormBuilder,
    private veloService: VeloService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Get Velo ID from route
    this.veloId = +this.route.snapshot.paramMap.get('id')!;
    this.initializeForm();
    this.loadVeloData();
  }

  // Initialize the form
  private initializeForm(): void {
    this.veloForm = this.fb.group({
      type: ['', Validators.required],
      marque: ['', Validators.required],
      status: [true, Validators.required]
    });
  }

  private loadVeloData(): void {
    this.veloService.afficherVeloParId(this.veloId).subscribe({
      next: (velo) => this.veloForm.patchValue(velo),
      error: (error) => console.error('Error loading vélo:', error)
    });
  }

  onSubmit(): void {
    if (this.veloForm.valid) {
      this.veloService.modifierVelo(this.veloId, this.veloForm.value).subscribe({
        next: () => {
          alert('Vélo updated successfully!');
          this.router.navigate(['/affichervelo']);
        },
        error: (error) => {
          console.error('Error updating vélo:', error);
          alert('Failed to update vélo.');
        }
      });
    }
  }
  goBack(): void {
    this.router.navigate(['/affichervelo']); // Navigate back to the afficher-velos component
  }
}
