{ pkgs }: {
	deps = [
        pkgs.nodePackages.typescript-language-server
        pkgs.yarn
        pkgs.ffmpeg
        pkgs.replitPackages.jest
        pkgs.libwebp
        pkgs.imagemagick
        pkgs.git
	];
}