package main

import (
	"context"
	"fmt"
	"time"

	"github.com/pquerna/otp/totp"
)

// App struct
type App struct {
	ctx context.Context
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

// returns a totp token from the given token
func (a *App) GetTotp(token string) string {
	now := time.Now()
	passcode, err := totp.GenerateCode(token, now)
	if err != nil {
		return fmt.Sprintf("Error generating TOTP: %v", err)
	}
	return passcode
}
